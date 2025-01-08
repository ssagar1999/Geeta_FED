import pandas as pd

data = {
    "csvCOmbininng": list(range(1, 31)),
    "data": [
       
    ]
}

# Create a DataFrame
merger = pd.DataFrame(syllabus_data)


file_path = "/m.xlsx"
merger.to_excel(file_path, index=False)

file_path

