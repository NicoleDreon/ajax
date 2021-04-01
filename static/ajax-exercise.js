"use strict";

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  evt.preventDefault();
  $.get("/fortune", (res) => {
    $("#fortune-text").html(res);
  });
  // TODO: get the fortune and show it in the #fortune-text div
}

$("#get-fortune-button").on("click", showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  let url = "/weather.json";
  let formData = { zipcode: $("#zipcode-field").val() };
  //   console.log(formData);
  // TODO: request weather with that URL and show the forecast in #weather-info
  $.get(url, formData, (res) => {
    // console.log(res);
    // let forecast = res.forecast;
    $("#weather-info").html(`${res.forecast} Temp: ${res.temp}`);
  });
}

$("#weather-form").on("submit", showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  let url = "/order-melons.json";

  const formInputs = {
    melon_type: $("#melon-type-field").val(), // melon_type and not melon?
    qty: $("#qty-field").val(),
  };
  //   console.log(formInputs);
  $.post(url, formInputs, (res) => {
    // console.log(res);
    $("#order-status").html(`${res.code} ${res.msg}`);
    if (res.code === "ERROR") {
      $("#order-status").addClass("order-error");
    } else if (res.code === "OK") $("#order-status").removeClass("order-error");
  });

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on("submit", orderMelons);
