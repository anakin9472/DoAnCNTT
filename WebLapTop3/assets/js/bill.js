var customerid = sessionStorage.getItem("userID")
console.log(customerid)
var formData = {customerid}
loadBills()
async function loadBills()
{
    var billList = await selectBillByCustomerID(formData)
    buildBillTable(billList) 
}

async function selectBillByCustomerID(formData) {
    var data = []
     await $.ajax({
      url: 'http://localhost:8080/myweb/AdvanceBillDetailsServlet',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(formData),
      dataType: 'json',
      // async: !1,
      success: function (response) {
          console.log(response)
          data = response
      },
      error: function (jqXHR) 
      {
          console.log("The following error occured: " + textStatus, errorThrown);
      },
      complete: function () 
      {
      }
  })
  return data;
}

function buildBillTable(data) 
{
    var table = document.getElementById('table-product-data')
    var row =``
  for (var i = 0; i < data.length; i++)
  {
    row = `<tr>
            <td>${data[i].billDetailsId}</td>
            <td>${data[i].customerid}</td>
            <td>${data[i].productId}</td>
            <td>${data[i].productName}</td>
            <td>${data[i].singlePrice}</td>
            <td>${data[i].num}</td>
            <td>${data[i].totalPrice}</td>      
          </tr>`

          table.innerHTML += row
  }
}



