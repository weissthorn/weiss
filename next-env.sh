
setup_env(){
    if ! command -v yarn &> /dev/null; then
  npm i -g yarn
  fi


# Install dependencies
yarn install

# Empty the .env file
echo "" >  .env.local

# Generate hash for API key
md5="weiss-random-hash"
hash="$(echo -n "$md5" | openssl rand -hex 20 )"


# Insert value to .env file
cat << EOF >> .env.local
NEXT_PUBLIC_DB_HOST="localhost"
NEXT_PUBLIC_DB_NAME="weiss"
NEXT_PUBLIC_DB_PORT=28015
NEXT_PUBLIC_API_URL=/api
NEXT_PUBLIC_API_KEY="$hash"
NEXT_PUBLIC_CLIENT_ORIGINS="localhost:2323"
EOF
}

setup_env