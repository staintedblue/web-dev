x = input()

n = 0
p = 0 # power

for i in reversed(x):
    n += int(i) * 2 ** p
    p += 1

print(n)