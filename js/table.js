//新增数据函数
function addrow()
{
    //根据id获取表格
    var table = document.getElementById('table');
    //获取插入的位置
    var length = table.rows.length;
    var newrow = table.insertRow(length);
    //插入列节点对象
    var thingcol = newrow.insertCell(0);
    var ordercol = newrow.insertCell(1);
    var ddlcol = newrow.insertCell(2);
    var submitwaycol = newrow.insertCell(3);
    var actioncol = newrow.insertCell(4);
    //修改节点文本内容
    thingcol.innerHTML = '未输入';
    ordercol.innerHTML = '未输入';
    ddlcol.innerHTML = '未输入';
    submitwaycol.innerHTML = '未输入';
    actioncol.innerHTML = '<button onclick="editrow(this)">编辑</button><button onclick="deleterow(this)">删除</button>';
}
//删除数据函数
function deleterow(button)
{
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
//编辑数据函数
function editrow(button)
{
    var row = button.parentNode.parentNode;
    var thing = row.cells[0];
    var order = row.cells[1];
    var ddl = row.cells[2];
    var submitway = row.cells[3];

    var inputthing = prompt("请输入具体事项：");
    var inputorder = prompt("请输入要求：");
    var inputddl = prompt("请输入ddl:");
    var inputsubmitway = prompt("请输入提交方式：");

    thing.innerHTML = inputthing;
    order.innerHTML = inputorder;
    ddl.innerHTML = inputddl;
    submitway.innerHTML = inputsubmitway;
}