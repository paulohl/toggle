<ol class="list">
    <li>
        <span class="menu glyphicon glyphicon-menu-down">&nbsp;MENU</span>
        <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>Menu Item 4</li>
        </ul>
    </li>
</ol>

<script>
    var $menu = $('ol.list li span.menu');
    $menu.next().hide();
    $menu.on('click', function () {
        $(this).toggleClass('glyphicon-menu-up glyphicon-menu-down').next().slideToggle();
    })
</script>

<!--
1 In the above script code, I've declared and initialized the variable I'm using which points to any element containing an ordered list with a class of list, 
but I've drilled down into that element to reach the span and actual menu.
2 When the page loads, the menu is automatically collapsed. If you want to have it show when the page loads, you will need to removed the $menu.next().hide() line. 
You will also need to flip the classes in the on click function that appear in .toggleClass().
3 Then I use the variables onClick function to open or expand the ordered list you've clicked on.
4 At the same time, I'm toggling the class to show an up or down chevron depending on the state of the menu - expanded or collapsed respectively. 
-->
