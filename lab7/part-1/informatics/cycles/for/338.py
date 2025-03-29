x = input()

rx = "" #rx is for reversed x

for i in x[::-1]:
    rx += i

print(int(rx))