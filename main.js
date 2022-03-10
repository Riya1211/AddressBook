document.getElementById('filterInput').addEventListener('keyup',() => {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    let ul = document.getElementById('names');
    let li = ul.querySelectorAll('li.collection-item');

    // function hideHeader(){
    //     setTimeout(function(){
    //         let empty = document.getElementById("filterInput").value == "";
    //         document.querySelectorAll('.collection-header').forEach(function(header){
    //             header.style.display = empty ? "block" : "none";
    //         });
    //     }, 0);
    // }

    
    li.forEach(item => {
        let a = item.getElementsByTagName('a')[0];
        item.style.display = a.innerHTML.toUpperCase().startsWith(filterValue) ? "block" : "none";
    })
    
    setTimeout(function(){
        let empty = document.getElementById("filterInput").value == "";
        document.querySelectorAll('.collection-header').forEach(function(header){
            header.style.display = empty ? "block" : "none";
        });
    }, 0);
})