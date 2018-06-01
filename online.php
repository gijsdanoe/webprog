<?PHP
if (isset($_POST['1']) || isset($_POST['2'])) {
    $data = file_get_contents("tictactoe.json");
    $books = json_decode($data);
    $X = htmlspecialchars($_POST['1']);
    $O = htmlspecialchars($_POST['2']);
    $values[] = array("1" => $X, "2" => $O);
    $output = json_encode($values);
    file_put_contents("tictactoe.json", $output);
}
?>