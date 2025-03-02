function FindProxyForURL(url, host) { 
		/* Bypass localhost and Private IPs */ 
		var resolved_ip = dnsResolve(host); 
		if (isPlainHostName(host) || 
		shExpMatch(host, "*.local") || 
		isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") || 
		isInNet(resolved_ip, "172.16.0.0",  "255.240.0.0") || 
		isInNet(resolved_ip, "192.168.0.0",  "255.255.0.0") || 
		isInNet(resolved_ip, "127.0.0.0", "255.255.255.0")) 
		return "DIRECT"; 

		/* Bypass FTP */ 
		if (url.substring(0,4) == "ftp:") 
			return "DIRECT"; 

		/* Bypass SAML, e.g. Okta */ 
		if (shExpMatch(host, "*.okta.com") || shExpMatch(host, "*.oktacdn.com")  || shExpMatch(host, " *.microsoftonline.com“)  || shExpMatch(host, “*.msftauth.net”)  || shExpMatch(host, "*.msauth.net“)  || shExpMatch(host, “*.windowsazure.com“)  || shExpMatch(host, "*.microsoftazuread-sso.com“)  || shExpMatch(host, "*.login.microsoftonline.com“)  || shExpMatch(host, " “)  || shExpMatch(host, "*.auth.microsoft.com;mysignins.microsoft.com“)) 
			return "DIRECT"; 

			/* Bypass ACS */ 
		if (shExpMatch(host, "*.acs.prismaaccess.com")) 
			return "DIRECT"; 

		/* Forward to Prisma Access */ 
		return "PROXY alrajhibankforinvetment-ea6b2fec.proxy.prismaaccess.com:8080";
}

