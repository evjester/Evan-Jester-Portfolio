# GPA Calculator Program
# Created to help students calculate their GPA from course letter grades

# Dictionary mapping letter grades to GPA points
grade_points = {
    "A+": 4.0,
    "A": 4.0,
    "A-": 3.7,
    "B+": 3.3,
    "B": 3.0,
    "B-": 2.7,
    "C+": 2.3,
    "C": 2.0,
    "C-": 1.7,
    "D+": 1.3,
    "D": 1.0,
    "D-": 0.7,
    "F": 0.0
}

def convert_grade_to_points(grade):
    grade = grade.upper()
    return grade_points.get(grade, None)

courses = []
grades = []

print("Welcome to the GPA Calculator!")
print("Enter course names and grades (e.g., A, B+, C-). Type 'done' to finish.\n")

while True:
    course = input("Enter course name (or 'done' to finish): ")
    if course.lower() == "done":
        break

    grade = input("Enter grade for " + course + ": ")
    points = convert_grade_to_points(grade)

    if points is None:
        print("Invalid grade entered. Please try again using grades like A, B+, D-, etc.\n")
        continue

    courses.append(course)
    grades.append(grade.upper())

total_points = 0
for grade in grades:
    total_points += grade_points[grade]

gpa = total_points / len(grades)

print("\n===== GPA Report =====")
for i in range(len(courses)):
    print(f"{courses[i]}: {grades[i]}")

print(f"\nYour GPA is: {gpa:.2f}")
