#!/bin/bash
set -e

# Update system
sudo apt-get update -y
sudo apt-get upgrade -y

# -------------------
# Create non-root user (optional, skip if already have one)
# -------------------
USERNAME=ubuntu   # change if needed

# Ensure user exists
if ! id "$USERNAME" &>/dev/null; then
  sudo adduser --disabled-password --gecos "" $USERNAME
  sudo usermod -aG sudo $USERNAME
fi

# -------------------
# Install dependencies
# -------------------
sudo apt-get install -y curl wget git apt-transport-https ca-certificates gnupg lsb-release software-properties-common

# -------------------
# Install Docker
# -------------------
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USERNAME
sudo systemctl enable docker
sudo systemctl start docker

# -------------------
# Install K3s (lightweight Kubernetes)
# -------------------
curl -sfL https://get.k3s.io | sh -

# Wait for K3s to be ready
sleep 30

# Set up kubeconfig for the user
sudo mkdir -p /home/$USERNAME/.kube
sudo cp /etc/rancher/k3s/k3s.yaml /home/$USERNAME/.kube/config
sudo chown $USERNAME:$USERNAME /home/$USERNAME/.kube/config
sudo chmod 600 /home/$USERNAME/.kube/config

# Set KUBECONFIG environment variable
echo "export KUBECONFIG=/home/$USERNAME/.kube/config" | sudo tee -a /home/$USERNAME/.bashrc

# -------------------
# Install Helm
# -------------------
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# -------------------
# Install Trivy (security scanner)
# -------------------
# Add Trivy GPG key and repository
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | sudo gpg --dearmor -o /usr/share/keyrings/trivy.gpg
echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/trivy.list
sudo apt-get update -y
sudo apt-get install -y trivy

# -------------------
# Install Prometheus & Grafana via Helm
# -------------------
# Set KUBECONFIG for current session
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml

# Add Helm repositories
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

# Create namespace
kubectl create namespace monitoring --dry-run=client -o yaml | kubectl apply -f -

# Install Prometheus
helm upgrade --install prometheus prometheus-community/prometheus \
  --namespace monitoring \
  --wait

# Install Grafana
helm upgrade --install grafana grafana/grafana \
  --namespace monitoring \
  --set adminPassword='admin' \
  --set service.type=NodePort \
  --wait

# -------------------
# Final message
# -------------------
echo "---------------------------------------------------"
echo "K3s, Docker, Helm, Trivy, Prometheus & Grafana installed!"
echo "Access Grafana via NodePort service (admin/admin)."
echo "Run 'kubectl get svc -n monitoring' to get service details."
echo "Kubectl config is ready for user: $USERNAME"
echo "---------------------------------------------------"