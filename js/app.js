$(document).foundation()
AOS.init();



$('.button').click(function(){
  visit_resp = parseFloat($('input:radio[name=visitas]:checked').val());
  certi_resp = parseFloat($('input:radio[name=certificacion]:checked').val());  
  redes_resp = parseFloat($('input:radio[name=redes]:checked').val());
  venta_resp = parseFloat($('input:radio[name=ventas]:checked').val());
  res_final = visit_resp + certi_resp + redes_resp + venta_resp;
  console.log(res_final);
  if(res_final >= 7.5){
    $('#r-postitivo').removeClass('hide')
    $('#r-postitivo').addClass('show')
  }
  else if(res_final <= 2.0){
    $('#r-negativo').removeClass('hide')
    $('#r-negativo').addClass('show')
  }
  else{
    $('#r-neutro').removeClass('hide')
    $('#r-neutro').addClass('show')
  }

  valores = [.5, 1, 1.5, 2];

  indice_visitas = valores.indexOf(visit_resp);
  indice_certificaciones = valores.indexOf(certi_resp);
  indice_redes = valores.indexOf(redes_resp);
  indice_ventas = valores.indexOf(venta_resp);

  porcentajes = [25, 50, 75, 100];

  porc_visitas = porcentajes[indice_visitas];
  porc_certificaciones = porcentajes[indice_certificaciones];
  porc_redes = porcentajes[indice_redes];
  porc_ventas = porcentajes[indice_ventas];

  $('#visitas').append("<td>"+porc_visitas+"</td>");
  $('#visitas').append("<td>40</td>"); 
  // certificaciones
  $('#certificaciones').append("<td>"+porc_certificaciones+"</td>");
  $('#certificaciones').append("<td>50</td>"); 
  // redes
  $('#redes').append("<td>"+porc_redes+"</td>");
  $('#redes').append("<td>75</td>");
  // ventas
  $('#ventas').append("<td>"+porc_ventas+"</td>");
  $('#ventas').append("<td>30</td>");

  $('#resultados').addClass('show')

  $(document).ready(function () {
    Highcharts.chart('container2', {
      data: {
        table: 'datatable'
      },
      chart: {
        type: 'column'
      },
      title: {
        text: 'Situación de la empresa'
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: 'Procentaje de incremento'
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.series.name + '</b><br/>' +
            this.point.y + ' ' + this.point.name.toLowerCase();
        }
      }
    });
  });
});


