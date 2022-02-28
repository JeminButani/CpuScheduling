print("Enter number of processes:")
n = int(input())
x =[]
y=[]
pid=[]
for i in range(n):
    print("Enter the arrival time and burst time of operation {}".format(i))
    a,b = map(int,input().split())
    x.append(a)
    y.append(b)
    pid.append(i)
#Sorting according to the arrival time
for i in range(n):
    for j in range(i+1,n):
        if(x[j]<x[i]):
            temp = x[j]
            x[j]=x[i]
            x[i]=temp

            temp1 = y[j]
            y[j]=y[i]
            y[i]=temp1

            temp2=pid[j]
            pid[j]=pid[i]
            pid[i]=temp2
            
#printing sorted arrays
# print("Sorted processes according to the arrival time:",end='\n')
# print(*x)
# print(*y)
# print(end='\n')
sum=0
serv=[]

# Calculating the service time for each process.
# print("The service time of operations:",end='\n')
for i in range(n):
    # print(sum,end = ' ')
    serv.append(sum)
    sum+=y[i]

print(end='\n')
d=[]
# forming table for tabular presentation.
for i in range(n):
    a=[]
    a.append(pid[i])
    a.append(x[i])
    a.append(y[i])
    a.append(serv[i])
    d.append(a)#,sep='\t',end='\n')
print(end="\n")

print ("{:<6} {:<8} {:<10} {:<10}".format('PID','Arrival','Burst','Service'))

for v in d:
    pid,arr,burst,ser = v
    print ("{:<6} {:<8} {:<10} {:<10}".format( pid,arr, burst, ser))
print(end='\n')

# Gantt chart
print("Gantt chart:",end='\n')
print("|",end='')
for i in range(n):
    print(y[i]*"_",end='')
    print("|",end='')
print(end='\n')

for i in range(n):
    print(serv[i],end='')
    if(serv[i]>9):
        print((y[i]-1)*" ",end='')
    else:
        print((y[i])*" ",end='')
print(sum,end='\n')