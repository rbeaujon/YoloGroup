<?PHP
 /*
 * API controller to handle all comunication from user Posts data
 */ 
require (__DIR__."/../../../../../../services/productService.php");
require (__DIR__."/../../../../../baseApi.php");


class GameAPI extends api {

    public $jsonList;

    public function get(){
     
        // $code = 200;
        // $games = ProductService::getAllGames(); // Call a public  static method getAll to obtein all product in DB//

        // if($games == NULL || $games === ""){

        //     $code = 500;
        //     api::responseCode($code);
        // }
        // else{ 
            
        //     api::responseCode($code);

        //     header('Content-Type: application/json; charset=utf-8'); 
        //     header("Access-Control-Allow-Origin: *");
        //     header('Access-Control-Allow-Credentials: true');
        //     header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
        //     header("Access-Control-Allow-Headers: X-Requested-With");
        //     header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
        //     echo json_encode($games, JSON_PRETTY_PRINT);
         
            


        // }
    }
    public function post(){

        // Raw data from the request and it converts into a PHP object
        $dataRaw = file_get_contents('php://input');
        $data = json_decode($dataRaw);

        //Variables from request 
        $operator_id = $data->operator_id;
        
        $code = 200;
        api::responseCode($code);

        if($data == NULL || $data === ""){

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
      
            $games = ProductService::getAllGames($operator_id);

            api::responseCode($code);

            header('Content-Type: application/json; charset=utf-8'); 
            header("Access-Control-Allow-Origin: *");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
            header("Access-Control-Allow-Headers: X-Requested-With");
            header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
            echo json_encode($games, JSON_PRETTY_PRINT);
        
        }  
    }
    public function put(){
        
        $code = 200;
        // Raw data from the request and it converts into a PHP object
        $dataRaw = file_get_contents('php://input');
        $data = json_decode($dataRaw);

        //Variables from request 
        $id = $data->id;
        $info = $data->info;
        $category = $data->category;

         // Sending the API json response

        if($id == NULL || $info == NULL || $info === "" || $category == NULL){

            $code = 400;

            header('Content-type:application/json');
            echo  $dataRaw ;
            api::responseCode($code); 

        }  
        else {
        
            $product = new products();
            $product->update($id, $info, $category);


            header('Content-type:application/json');
            echo $dataRaw;
    
            api::responseCode($code); 

         }
  
    }
    public function delete(){}
}

$GameAPI = new GameAPI();
$GameAPI->handleRequest();


