<?PHP
 /*
 * API controller to handle all comunication from user Posts data
 */ 
require (__DIR__."/../../../services/productService.php");
require (__DIR__."/../../baseApi.php");


class GameAPI extends api {

    public $jsonList;

    public function get(){}
    public function post(){
        // Raw data from the request and it converts into a PHP object
        $dataRaw = file_get_contents('php://input');
        $data = json_decode($dataRaw);

        //Variables from request 
        $operator_id = $data->operator_id;
        $user_id = $data->user_id;
        $user_name = $data->user_name;
        $user_ip = $data->user_ip;
        $date = date("Y/m/d");
        
        $code = 200;
        api::responseCode($code);

        if($data == NULL || $data === "" || $operator_id === "" || $user_id === "" || $user_name === "" || $date === ""){

            $code = 500;
            api::responseCode($code);

            header('Content-Type: application/json; charset=utf-8'); 
            header("Access-Control-Allow-Origin: *");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
            header("Access-Control-Allow-Headers: X-Requested-With");
            header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
            echo json_encode("Error in the request, check the JSON data", JSON_PRETTY_PRINT);
        }
        else{ 
      
            $product = new products();
            $product->create($operator_id,$user_id,$user_name,$user_ip,$date);


            api::responseCode($code);

            header('Content-Type: application/json; charset=utf-8'); 
            header("Access-Control-Allow-Origin: *");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
            header("Access-Control-Allow-Headers: X-Requested-With");
            header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
            echo json_encode("The vist was registered correctly", JSON_PRETTY_PRINT);
        
        }  
    }
    public function put(){}
    public function delete(){}

}
$GameAPI = new GameAPI();
$GameAPI->handleRequest();


