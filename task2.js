/*

Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned below, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04

*/


var marksInMathematics = 75.25
var marksInBiology = 65
var marksInChemistry = 80
var marksInPhysics = 35.45
var marksInBangla = 99.50

var totalMarks = marksInMathematics + marksInBiology + marksInChemistry + marksInPhysics + marksInBangla

var averageMarks = totalMarks / 5

console.log(averageMarks.toFixed(2))