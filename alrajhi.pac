{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 HelveticaNeue-Italic;\f2\fnil\fcharset0 Menlo-Regular;
}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\csgray\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18900\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function FindProxyForURL(url, host) \{ \
		/* Bypass localhost and Private IPs */ \
		var resolved_ip = dnsResolve(host); \
		if (isPlainHostName(host) || \
		shExpMatch(host, "*.local") || \
		isInNet(resolved_ip, "10.0.0.0", "255.0.0.0") || \
		isInNet(resolved_ip, "172.16.0.0",  "255.240.0.0") || \
		isInNet(resolved_ip, "192.168.0.0",  "255.255.0.0") || \
		isInNet(resolved_ip, "127.0.0.0", "255.255.255.0")) \
		return "DIRECT"; \
\
		/* Bypass FTP */ \
		if (url.substring(0,4) == "ftp:") \
			return "DIRECT"; \
\
		/* Bypass SAML, e.g. Okta */ \
		if (shExpMatch(host, "*.okta.com") || shExpMatch(host, "*.oktacdn.com")  || shExpMatch(host, " *
\f1\i\fs26 .microsoftonline.com
\f0\i0\fs24 \'93)  || shExpMatch(host, \'93*.msftauth.net\'94)  || shExpMatch(host, "*.msauth.net\'93)  || shExpMatch(host, \'93*.windowsazure.com\'93)  || shExpMatch(host, "*.microsoftazuread-sso.com\'93)  || shExpMatch(host, "*.login.microsoftonline.com\'93)  || shExpMatch(host, " \'93)  || shExpMatch(host, "*.auth.microsoft.com;mysignins.microsoft.com\'93)) \
			return "DIRECT"; \
\
			/* Bypass ACS */ \
		if (shExpMatch(host, "*.acs.prismaaccess.com")) \
			return "DIRECT"; \
\
		/* Forward to Prisma Access */ \
		return "PROXY 
\f2\fs22 \cf2 \CocoaLigature0 alrajhibankforinvetment-ea6b2fec.proxy.prismaaccess.com
\f0\fs24 \cf0 \CocoaLigature1 :8080";\
	\}\
}