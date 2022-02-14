def repeatedString(s, n):
    
    str_len = len(s)
    extra = n % str_len
    number_of_str = n // str_len
    str_count = (s.count('a')*number_of_str)+s[:extra].count('a')
    
    return str_count