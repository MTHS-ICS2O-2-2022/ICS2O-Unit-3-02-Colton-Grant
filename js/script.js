// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: colton
// Created on: april 2023
// This file contains the JS functions for index.html
'use strict'
/**
* This function calculates area and perimeter of rectangle.
*/
function doMATH() {
 // input
 const width = parseInt(document.getElementById('Width').value)
 const length= parseInt(document.getElementById('Length').value)
 const height= parseInt(document.getElementById('Height').value)


 // process
 const area = (length * width * height) / 3


 // output
 document.getElementById('area').innerHTML =
   'volume is: ' + (length * width * height) /2 * height + ' mm³'
}