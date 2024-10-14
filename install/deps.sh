#!/bin/bash

# Function to check if RethinkDB exists
check_rethinkdb_installed() {
    if command -v rethinkdb &> /dev/null; then
        echo "RethinkDB is already installed. Skipping installation."
        return 0
    else
        echo "RethinkDB not found. Proceeding with installation."
    fi
}

# Function to install RethinkDB on macOS using Homebrew
install_on_macos() {
    echo "Installing RethinkDB on macOS..."
    # Check if Homebrew is installed
    if ! command -v brew &> /dev/null; then
        echo "Homebrew not found. Installing Homebrew first..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    fi

    # Install RethinkDB
    brew install rethinkdb
    rethinkdb --bind all &> /dev/null &
}

# Function to install RethinkDB on Debian-based systems (Ubuntu, Debian)
install_on_debian() {
    echo "Installing RethinkDB on Debian-based system..."
    
    # Add RethinkDB official repository
    echo "Adding RethinkDB repository..."
    source /etc/os-release
    codename=$(lsb_release -c -s) # Get the codename for the distro (e.g., bionic, focal)

    echo "deb https://download.rethinkdb.com/repository/debian/ $codename main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
    wget -qO- https://download.rethinkdb.com/repository/raw/pubkey.gpg | sudo apt-key add -

    # Update package lists and install RethinkDB
    sudo apt-get update
    sudo apt-get install -y rethinkdb
    rethinkdb --bind all &> /dev/null &
}

# Function to install RethinkDB on Fedora-based systems
install_on_fedora() {
    echo "Installing RethinkDB on Fedora-based system..."
    
    # Add RethinkDB official repository
    sudo tee /etc/yum.repos.d/rethinkdb.repo <<EOF
[rethinkdb]
name=RethinkDB
baseurl=https://download.rethinkdb.com/repository/fedora/\$releasever/\$basearch/
enabled=1
gpgcheck=0
EOF

    # Install RethinkDB
    sudo dnf install -y rethinkdb
    rethinkdb --bind all &> /dev/null &
}


# Detect the OS and install RethinkDB accordingly
detect_os_and_install() {
    uname_out="$(uname)"
    if [[ "$uname_out" == "Darwin" ]]; then
        install_on_macos
    elif [[ -f /etc/os-release ]]; then
        . /etc/os-release
        if [[ "$ID" == "debian" || "$ID_LIKE" == *"debian"* ]]; then
            install_on_debian
        elif [[ "$ID" == "fedora" || "$ID_LIKE" == *"fedora"* ]]; then
            install_on_fedora
        else
            echo "Unsupported Linux distribution."
            return 1
        fi
    else
        echo "Unknown OS."
        return 1
    fi
}

# Main execution
check_rethinkdb_installed
detect_os_and_install
