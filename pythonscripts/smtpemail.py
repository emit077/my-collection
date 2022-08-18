import smtplib
print("start")
conn=smtplib.SMTP("smtp.gmail.com",857)
conn.starttls()
conn.login(user="emitsahu077@gmail.com",password="maibhulgya")
conn.sendmail(from_addr="emitsahu077@gmail.com",to_addrs="suyash.tutorfactory@gmail.com",msg="hello amit")
conn.close()
print(conn)
print("end")