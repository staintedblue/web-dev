# Return the number of times that the string "code" appears anywhere in the given string, 
# we'll accept any letter for the 'd', so "cope" and "cooe" count.

# count_code('aaacodebbb') → 1
# count_code('codexxcode') → 2
# count_code('cozexxcope') → 2

def count_code(str):

    count = 0

    for i in range(len(str) - 3):
        if str[i:i+2] == "co" and str[i+3] == "e":
            count += 1
    return count

# def count_code(str):

#     count = 0

#     i = 0

#     while i < len(str) - 3:
#         if str[i:i+2] == 'co' and str[i+3] == 'e':
#             count += 1
#             i += 4
#         else:
#             i += 1
#     return count