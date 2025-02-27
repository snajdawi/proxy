function FindProxyForURL(url, host) {
    // Bypass proxy for local network
    if (isPlainHostName(host) || 
        shExpMatch(host, "*.local") || 
        isInNet(host, "192.168.1.0", "255.255.255.0") || 
        isInNet(host, "172.20.0.0", "255.255.0.0") || 
        shExpMatch(host, "*.saadnoon.com") || 
        shExpMatch(host, "*.jumpcloud.com") || 
        shExpMatch(host, "*.githubusercontent.com")) {
        return "DIRECT";
    }
    
    // Use proxy for all other traffic
    return "PROXY 172.20.2.4:8080";
}
