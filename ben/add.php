<?php
/**
 * Created by PhpStorm.
 * User: Benjamin
 * Date: 04-06-18
 * Time: 14:49
 */

if (isset($_POST['box']) && isset($_POST['value']) ) {
    $data = file_get_contents("values.json"); /* Leest books.json in als string */
    $variables = json_decode($data); /* Maakt van de ingelezen JSON weer een array */
    $box = $_POST['box'];
    $value = $_POST['value'];
    $variables[$box] = array("box" => $box, "value" => $value);
    $output = json_encode($variables);
    file_put_contents("values.json", $output); /* Schrijf de JSON weer weg naar books.json */
}

?>