people = [
    {"name": "Harry", "house": "Gryfinddor"},
    {"name": "Cho", "house": "Ravenclaw"},
    {"name": "Draco", "house": "Slytherin"},
]


# def sort_people(person):
#     return person["name"]


# people.sort(key=sort_people)

# print(people)

people.sort(key=lambda person : person["name"])
print(people)
