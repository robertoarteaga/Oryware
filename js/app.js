$(document).foundation()
AOS.init();



$('.button').click(function(){
  visit_resp = parseFloat($('input:radio[name=visitas]:checked').val());
  certi_resp = parseFloat($('input:radio[name=certificacion]:checked').val());  
  redes_resp = parseFloat($('input:radio[name=redes]:checked').val());
  venta_resp = parseFloat($('input:radio[name=ventas]:checked').val());
  console.log(visit_resp, certi_resp, redes_resp, venta_resp);
  $('#resultados').addClass('show')
  res_final = visit_resp + certi_resp + redes_resp + venta_resp;
  console.log(res_final);
});


Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Ventas<br>Noviembre<br>2019',
      align: 'center',
      verticalAlign: 'middle',
      y: 60
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '50%',
      data: [
        ['Chrome', 58.9],
        ['Firefox', 13.29],
        ['Internet Explorer', 13],
        ['Edge', 3.78],
        ['Safari', 3.42],
        {
          name: 'Other',
          y: 7.61,
          dataLabels: {
            enabled: false
          }
        }
      ]
    }]
  });
  
Highcharts.chart('container2', {
  data: {
    table: 'datatable'
  },
  chart: {
    type: 'column'
  },
  title: {
    text: 'Data extracted from a HTML table in the page'
  },
  yAxis: {
    allowDecimals: false,
    title: {
      text: 'Units'
    }
  },
  tooltip: {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
        this.point.y + ' ' + this.point.name.toLowerCase();
    }
  }
});
