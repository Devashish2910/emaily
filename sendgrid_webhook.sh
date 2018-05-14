function localtunnel {
lt -s 10291993emaily-dev --port 3050
}

until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done