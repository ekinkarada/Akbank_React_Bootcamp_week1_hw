data= {
    "cols": [
      "Name Surname",
      "Company",
      "Email",
      "Date",
      "Country",
      "City"
    ],
    "data": [
      [
        "Hyacinth Vincent",
        "Duis Corporation",
        "iaculis.enim@magnaCrasconvallis.ca",
        "28/06/2022",
        "Eritrea",
        "Lyubertsy"
      ],
      [
        "Brenden Martinez",
        "Volutpat Nunc Associates",
        "iaculis@estMauris.org",
        "24/03/2021",
        "British Indian Ocean Territory",
        "Colwood"
      ]
    ]
  }
result=[]

for (let index = 0; index < data.cols.length; index++) {
        key=data.cols[index]
        value=data.data[0][index]
        
        result.push({[key]:value})
}
for (let index = 0; index < data.cols.length; index++) {
    a=data.cols[index]
    b=data.data[1][index]
    
    result.push({[a]:b})
}
console.log(result)






