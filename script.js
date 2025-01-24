function validateForm()
{
    var nm=document.frm.t1.value
    var em=document.frm.t2.value
    if(nm=="")
    {
        alert("name can not be blank!!!")
    }
    else if(em=="")
    {
        alert("Email can not be blank!!!")
        return false
    }
    else
    {
        return true
    }
}
function ShowImage()
{
    const img=document.getElementById("image");
    img.style.display ="block";
}