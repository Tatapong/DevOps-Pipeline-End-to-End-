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
sudo chown $USERNAME:$USERNAME /etc/rancher/k3s/k3s.yaml
sudo chmod 644 /etc/rancher/k3s/k3s.yaml
mkdir -p /home/$USERNAME/.kube
sudo cp /etc/rancher/k3s/k3s.yaml /home/$USERNAME/.kube/config
sudo chown $USERNAME:$USERNAME /home/$USERNAME/.kube/config

# Allow kubectl without sudo
sudo ln -sf /usr/local/bin/kubectl /usr/bin/kubectl

# -------------------
# Install Helm
# -------------------
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash

# -------------------
# Install Trivy (security scanner)
# -------------------
sudo apt-get install -y wget apt-transport-https gnupg
wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | sudo apt-key add -
echo deb https://aquasecurity.github.io/trivy-repo/deb $(lsb_release -sc) main | sudo tee /etc/apt/sources.list.d/trivy.list
sudo apt-get update -y
sudo apt-get install -y trivy

# -------------------
# Install Prometheus & Grafana via Helm
# -------------------
# Add Helm repo
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

# Create namespace
kubectl create namespace monitoring || true

# Install Prometheus
helm install prometheus prometheus-community/prometheus \
  --namespace monitoring

# Install Grafana
helm install grafana grafana/grafana \
  --namespace monitoring \
  --set adminPassword='admin' \
  --set service.type=LoadBalancer

# -------------------
# Final message
# -------------------
echo "---------------------------------------------------"
echo "K3s, Docker, Helm, Trivy, Prometheus & Grafana installed!"
echo "Access Grafana via LoadBalancer external IP (admin/admin)."
echo "Kubectl config is ready for user: $USERNAME"
echo "---------------------------------------------------"

