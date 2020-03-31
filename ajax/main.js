document.getElementById('button').addEventListener('click',loadText)

function loadText()
{
    var abc = new XMLHttpRequest();
    abc.open('GET','data.json',true);
    abc.onload = function()
    {
        // if(this.readyState== 4  && this.status == 200)
        // {
        //     document.querySelector('p').innerHTML = this.responseText;
        // }
        if(this.readyState ==4 && this.status ==200)
        {
            
        }
    }
    abc.send();
}