#NetworkDump-Analyser

## Release Notes
+ Porting the project from Python2.X to Python3.X
+ Fixed multiple bugs

## The main function
+ 1. Display the basic information of the data package
+ 2. Analyze the data packet protocol
+ 3. Analyze data packet flow
+ 4. Draw a map of the latitude and longitude of access IP
+ 5. Extract the session connection of the specific protocol in the data packet (WEB, FTP, Telnet)
+ 6. Extract sensitive data (password) from the session
+ 7. Simple analysis of security risks in data packets (WEB attacks, brute force cracking)
+ 8. Extract the transmission file of a specific protocol or all the binary files in the datagram

## Show results
### Home:
![Alt ​​Text](https://github.com/HatBoy/Pcap-Analyzer/blob/master/images/index.png)

### Basic data display:
![Alt ​​Text](https://github.com/HatBoy/Pcap-Analyzer/blob/master/images/basedata.png)

### Protocol analysis:
![Alt ​​Text](https://github.com/HatBoy/Pcap-Analyzer/blob/master/images/protoanalyxer.png)

### Traffic Analysis:
![Alt ​​Text](https://github.com/HatBoy/Pcap-Analyzer/blob/master/images/flowanalyzer.png)

### Access IP latitude and longitude map:
![Alt ​​Text](https://github.com/HatBoy/Pcap-Analyzer/blob/master/images/ipmap.png)

### Session extraction:
![Alt ​​Text](https://github.com/HatBoy/Pcap-Analyzer/blob/master/images/getdata.png)

### Attack information warning:
![Alt ​​Text](https://github.com/HatBoy/Pcap-Analyzer/blob/master/images/attackinfo.png)

### File extraction:
![Alt ​​Text](https://github.com/HatBoy/Pcap-Analyzer/blob/master/images/getfiles.png)

## Installation and deployment process:

+ Operating environment: Python 3.5.X
+ Operating system: Linux (take Ubuntu 15.10 as an example)

### 1. Python related environment configuration (Python 2.7 is installed by default in Ubuntu without additional installation of Python)
Python package manager installation: sudo apt-get install python-setuptools python-pip

### 2. Related third-party dependency library installation:
+ sudo apt-get install tcpdump graphviz imagemagick python-gnuplot python-crypto python-pyx
+ sudo pip3 install Flask
+ sudo pip3 install Flask-WTF
+ sudo pip3 install geoip2
+ sudo pip3 install pyx
+ sudo pip3 install requests
+ Please refer to the official documentation for the installation of scapy. The version of scapy is 2.4.0. There are major changes in the version after 2.4.0, which may cause incompatibility.

### 3. Modify the configuration file
Pay attention to modify the directory location in the config.py configuration file
+ UPLOAD_FOLDER ='/home/dj/PCAP/' where the uploaded PCAP file is saved
+ FILE_FOLDER ='/home/dj/Files/' The location where files are saved when extracting files. There must be All, FTP, Mail, and Web subdirectories below to store files with different protocols.
+ PDF_FOLDER ='/home/dj/Files/PDF/' The location where PCAP is saved as PDF

### 4. Server installation
+ Gunicorn server: pip3 install gunicorn
+ Nginx server: sudo apt-get install nginx
+ Nginx configuration: modify the /etc/nginx/nginx.conf file, add the following code in http{}:
```
```
server { 
listen 81; 
server_name localhost; 
access_log /var/log/nginx/access.log; 
error_log /var/log/nginx/error.log;

     location / {
        #root   html;
        #index  index.html index.htm;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header Host $http_host;
         proxy_pass http://127.0.0.1:8000;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
```

### 5. Start the system:
+ Enter the directory where the system is located: ../pcap-analyzer
+ Start the system through the Gunicorn server and run the command: gunicorn -c deploy_config.py run:app
+ At this time, the system can only be accessed locally, address: http://127.0.0.1:8000
+ Start the Nginx server: sudo service nginx start
+ At this time, other hosts can also access the system, address: http://server IP:81


## Analysis and optimization
### The accuracy of the analysis results of the data packet can be improved by modifying the configuration file.
+ Replace the IP address latitude and longitude database file of ./app/utils/GeoIP/GeoLite2-City.mmdb to improve the accuracy of the IP latitude and longitude map
+ Modify. /app/utils/protocol/ The representation number and corresponding protocol name of each TCP/IP protocol stack in the /app/utils/protocol/ directory can modify the protocol analysis results
+ Modify the ./app/utils/waring/HTTP_ATTACK file to improve the accuracy of HTTP protocol attacks in data packets
