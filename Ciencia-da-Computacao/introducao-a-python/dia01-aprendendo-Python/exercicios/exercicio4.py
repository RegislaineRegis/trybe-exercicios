def lenghtName(names):
    name1 = names[0]
    for name in names:
        if len(name) > len(name1):
            name1 = name
    return name1    
    