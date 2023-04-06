/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */


class MyThemeStacked extends am5.Theme {
  setupDefaultRules() {
    this.rule("ColorSet").set("colors", [
      am5.color("#0A86F5"),
      am5.color("#FD6A3C"),
      am5.color("#92A6AA"),
      am5.color("#FFBA35")
    ]);
  }
}

// 막대그래프
function createChart(chartId) {
  var stacked = am5.Root.new(chartId);

  stacked.autoMargins = false;

  stacked.setThemes([
    am5themes_Animated.new(stacked), MyThemeStacked.new(stacked)
  ]);

  // Create chart
  var chart = stacked.container.children.push(am5xy.XYChart.new(stacked, {
    panX: true,
    panY: false,
    wheelX: "panX",
    wheelY: "panX",
    layout: stacked.verticalLayout
  }));

  // Add scrollbar
  chart.set("scrollbarX", am5.Scrollbar.new(stacked, {
    orientation: "horizontal"
  }));

  // Add legend
  var legend = chart.children.push(am5.Legend.new(stacked, {
    centerX: am5.p50,
    x: am5.p50
  }));


  // Create axes
  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(stacked, {
    categoryField: "time",
    renderer: am5xy.AxisRendererX.new(stacked, {
    }),
    tooltip: am5.Tooltip.new(stacked, {
    })
  }));


  xAxis.data.setAll(dummyDriveData);

  xAxis.events.once("datavalidated", function(ev) {
    ev.target.zoomToIndexes(0, 6);
  });


  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(stacked, {
    min: 0,
    renderer: am5xy.AxisRendererY.new(stacked, {})
  }));


  // Add legend
  var legend = chart.children.push(am5.Legend.new(stacked, {
    centerX: am5.p50,
    x: am5.p50,
  }));
/*  var series = chart.series.push(
      am5xy.LineSeries.new(stacked, {
        name: "Sales",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category",
        tooltip: am5.Tooltip.new(stacked, {}),
        fill: am5.color(0x095256),
        legendLabelText: "[{stroke}]{name}[/]: [bold #888]{categoryX}[/]",
        legendRangeLabelText: "[{stroke}]{name}[/]",
        legendValueText: "[bold {stroke}]{valueY}[/]",
        legendRangeValueText: "[{stroke}]{valueYClose}[/]"
      })
  );*/

// Add series
  function makeSeries(name, fieldName) {
    var series = chart.series.push(am5xy.ColumnSeries.new(stacked, {
      name: name,
      stacked: true,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: fieldName,
      categoryXField: "time",
    }));
    series.columns.template.setAll({
      tooltipText: "[fontSize: 12px]{name}[/] [bold fontSize: 16px fontVariant: small-caps] \n {valueY}[/]",
      tooltipY: am5.percent(10),
    });

    series.data.setAll(dummyDriveData);


    series.bullets.push(function () {
      return am5.Bullet.new(stacked, {
        sprite: am5.Label.new(stacked, {
          text: "[bold]{valueY}[/]",
          fontSize: 13,
          fill: stacked.interfaceColors.get("alternativeText"),
          centerY: am5.p50,
          centerX: am5.p50,
          populateText: true,
        })
      });
    });

    legend.data.push(series);
  }


  makeSeries("탑승성공", "success");
  makeSeries("탑승전취소", "cancelBefore");
  makeSeries("미탑승취소", "cancelAfter");
  makeSeries("배차불가", "impossibility");

  return stacked;
}
// 막대그래프 - 대시보드
function createChartMain() {
  var stacked = am5.Root.new("chart-dashBoard");

  stacked.autoMargins = false;

  stacked.setThemes([
    am5themes_Animated.new(stacked), MyThemeStacked.new(stacked)
  ]);

  // Create chart
  var chart = stacked.container.children.push(am5xy.XYChart.new(stacked, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: stacked.verticalLayout
  }));

  // Add legend
  var legend = chart.children.push(am5.Legend.new(stacked, {
    centerX: am5.p50,
    x: am5.p50
  }));


  // Create axes
  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(stacked, {
    categoryField: "time",
    renderer: am5xy.AxisRendererX.new(stacked, {
    }),
    tooltip: am5.Tooltip.new(stacked, {
    })
  }));


  xAxis.data.setAll(dummyDriveData2);

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(stacked, {
    min: 0,
    renderer: am5xy.AxisRendererY.new(stacked, {})
  }));

  // Add legend
  var legend = chart.children.push(am5.Legend.new(stacked, {
    centerX: am5.p50,
    x: am5.p50,
  }));

// Add series
  function makeSeries(name, fieldName) {
    var series = chart.series.push(am5xy.ColumnSeries.new(stacked, {
      name: name,
      stacked: true,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: fieldName,
      categoryXField: "time",
    }));
    series.columns.template.setAll({
      tooltipText: "[fontSize: 11px]{name}[/] [bold fontSize: 16px fontVariant: small-caps] \n {valueY}[/]",
      tooltipY: am5.percent(10),
    });

    series.data.setAll(dummyDriveData2);


    series.bullets.push(function () {
      return am5.Bullet.new(stacked, {
        sprite: am5.Label.new(stacked, {
          text: "[bold]{valueY}[/]",
          fontSize: 10,
          fill: stacked.interfaceColors.get("alternativeText"),
          centerY: am5.p50,
          centerX: am5.p50,
          populateText: true,
        })
      });
    });

    legend.data.push(series);
  }


  makeSeries("탑승성공", "success");
  makeSeries("탑승전취소", "cancelBefore");
  makeSeries("미탑승취소", "cancelAfter");
  makeSeries("배차불가", "impossibility");

  return stacked;
}



// 라인그래프
function createLine(lineId) {
  // amCharts 차트 생성
  var root = am5.Root.new(lineId);

  // Set themes
  root.setThemes([am5themes_Animated.new(root)]);

// Create chart
  var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout
      })
  );

  // Add scrollbar
  chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
      })
  );

  // Create axes
  var xRenderer = am5xy.AxisRendererX.new(root, {});
  var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "time",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      })
  );
  xRenderer.grid.template.setAll({
    location: 1
  })

  xAxis.data.setAll(dummyPassengerData);

  var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        extraMax: 0.1,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1
        })
      })
  );

  // Add series
  var series1 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "전체(명)",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "all",
        categoryXField: "time",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[fontSize: 12px]{name} : [/] [bold fontSize: 16px fontVariant: small-caps]{valueY}[/]",
        })
      })
  );

  series1.strokes.template.setAll({
    strokeWidth: 3,
    templateField: "strokeSettings"
  });

  series1.data.setAll(dummyPassengerData);

  series1.bullets.push(function() {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        strokeWidth: 3,
        stroke: series1.get("stroke"),
        radius: 5,
        fill: root.interfaceColors.get("background")
      })
    });
  });

  var series2 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "어른(명)",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "adult",
        categoryXField: "time",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[fontSize: 12px]{name} : [/] [bold fontSize: 16px fontVariant: small-caps]{valueY}[/]"
        })
      })
  );

  series2.strokes.template.setAll({
    strokeWidth: 3,
    templateField: "strokeSettings"
  });

  series2.data.setAll(dummyPassengerData);

  series2.bullets.push(function() {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        strokeWidth: 3,
        stroke: series2.get("stroke"),
        radius: 5,
        fill: root.interfaceColors.get("background")
      })
    });
  });

  var series3 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "청소년(명)",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "youth",
        categoryXField: "time",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[fontSize: 12px]{name} : [/] [bold fontSize: 16px fontVariant: small-caps]{valueY}[/]"
        })
      })
  );

  series3.strokes.template.setAll({
    strokeWidth: 3,
    templateField: "strokeSettings"
  });

  series3.data.setAll(dummyPassengerData);

  series3.bullets.push(function() {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        strokeWidth: 3,
        stroke: series3.get("stroke"),
        radius: 5,
        fill: root.interfaceColors.get("background")
      })
    });
  });

  var series4 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "어린이(명)",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "child",
        categoryXField: "time",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[fontSize: 12px]{name} : [/] [bold fontSize: 16px fontVariant: small-caps]{valueY}[/]"
        })
      })
  );

  series4.strokes.template.setAll({
    strokeWidth: 3,
    templateField: "strokeSettings"
  });

  series4.data.setAll(dummyPassengerData);

  series4.bullets.push(function() {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        strokeWidth: 3,
        stroke: series4.get("stroke"),
        radius: 5,
        fill: root.interfaceColors.get("background")
      })
    });
  });

  chart.set("cursor", am5xy.XYCursor.new(root, {}));

  // Add legend
  var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
  );
  legend.data.setAll(chart.series.values);

  // Make stuff animate on load
  chart.appear(1000, 100);
  series1.appear();


  return root;
}
// 라인그래프 - 대시보드
function createLineMain() {
  // amCharts 차트 생성
  var root = am5.Root.new("line-dashBoard");

  // Set themes
  root.setThemes([am5themes_Animated.new(root)]);

  // Create chart
  var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "panX",
        layout: root.verticalLayout
      })
  );

  // Create axes
  var xRenderer = am5xy.AxisRendererX.new(root, {});
  var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "time",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      })
  );
  xRenderer.grid.template.setAll({
    location: 1
  })

  xAxis.data.setAll(dummyPassengerData);

  var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        extraMax: 0.1,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1
        })
      })
  );

  // Add series
  var series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "탑승자 수",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "time",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[fontSize: 12px]{name} : [/] [bold fontSize: 16px fontVariant: small-caps]{valueY}[/]",
        })
      })
  );

  series.strokes.template.setAll({
    strokeWidth: 3,
    templateField: "strokeSettings"
  });

  series.data.setAll(dummyPassengerData2);

  series.bullets.push(function() {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        strokeWidth: 3,
        stroke: series.get("stroke"),
        radius: 5,
        fill: root.interfaceColors.get("background")
      })
    });
  });

  chart.set("cursor", am5xy.XYCursor.new(root, {}));

  // Add legend
  var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
  );
  legend.data.setAll(chart.series.values);

  // Make stuff animate on load
  chart.appear(1000, 100);
  series.appear();


  return root;
}


// 도넛그래프
function createDonut1() {
    // Create root element
    var root = am5.Root.new("donut-dashBoard-1");

    // Set themes
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create chart
    var chart = root.container.children.push(am5percent.PieChart.new(root, {
        layout: root.verticalLayout
    }));

    // Create series
    var series = chart.series.push(am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category"
    }));

    series.labels.template.set("visible", false);
    series.ticks.template.set("visible", false);

    // Set data
    series.data.setAll(dummyHistory);

    // Create legend
    var legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 0,
        marginBottom: 20,
    }));

    legend.data.setAll(series.dataItems);

    series.appear(1000, 100);
}
// 도넛그래프
function createDonut2() {
    // Create root element
    var root = am5.Root.new("donut-dashBoard-2");

    // Set themes
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create chart
    var chart = root.container.children.push(am5percent.PieChart.new(root, {
        layout: root.verticalLayout
    }));

    // Create series
    var series = chart.series.push(am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category"
    }));

    series.labels.template.set("visible", false);
    series.ticks.template.set("visible", false);

    // Set data
    series.data.setAll(dummyCancel);

    // Create legend
    var legend = chart.children.push(am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 0,
        marginBottom: 20,
    }));

    legend.data.setAll(series.dataItems);

    series.appear(1000, 100);
}





// 차트 ID 배열
var chartIds = ["chart-1", "chart-2", "chart-3", "chart-4"];
var lineIds = ["line-1", "line-2", "line-3", "line-4"];

// 막대차트 생성 및 설정
if($(".chart-wrap").length > 0) {
  for (var i = 0; i < chartIds.length; i++) {
    var chartId = chartIds[i];
    var chart = createChart(chartId);
  }
}
// 막대차트 - 메인
if($("#chart-dashBoard").length > 0) {
    createChartMain();
}


// 라인차트 생성 및 설정
if($(".line-wrap").length > 0) {
  for (var i = 0; i < lineIds.length; i++) {
    var lineId = lineIds[i];
    var line = createLine(lineId);
  }
}
// 라인차트 - 메인
if($("#line-dashBoard").length > 0) {
    createLineMain();
}



// 도넛차트 - 메인 1
if($("#donut-dashBoard-1").length > 0) {
    createDonut1();
}
// 도넛차트 - 메인 2
if($("#donut-dashBoard-2").length > 0) {
    createDonut2();
}