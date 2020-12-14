let note;
let language1, language2, language3, language4, language5, percent;

language1 = parseInt(prompt("Enter marks of C:"));
language2 = parseInt(prompt("Enter marks of HTML:"));
language3 = parseInt(prompt("Enter marks of JAVA:"));
language4 = parseInt(prompt("Enter marks of C++:"));
language5 = parseInt(prompt("Enter marks of Bootstrap:"));
if (note = confirm("do you want to print your result")) {



    document.write("<tr> <td> Marks of C :" + language1 + "<br/> </td> </tr>");

    document.write("Marks of HTML :" + language2 + "<br/>");
    document.write("Marks of JAVA :" + language3 + "<br/>");
    document.write("Marks of C++ :" + language4 + "<br/>");
    document.write("Marks of Bootstrap :" + language5 + "<br/>");

    let total = language1 + language2 + language3 + language4 + language5;
    document.write("Total marks :" + total + "<br/>");

    percent = total / 5;
    document.write("Total Percentage :" + percent + "<br/>");
    if (percent >= 75) {
        document.write("You pass with Distinction");

    } else if (percent < 75 && percent >= 60) {
        document.write("You pass with first class");
    } else if (percent < 60 && percent >= 45) {
        document.write("You pass with second class");
    } else if (percent < 45 && percent >= 35) {
        document.write("You pass with passing marks");
    } else {
        document.write("You are fail");
    }


}