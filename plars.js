'use strict'

const $ = foo => {
    return window.onload = foo
}

$(function() {
    console.log('Я загрузился!');
})


