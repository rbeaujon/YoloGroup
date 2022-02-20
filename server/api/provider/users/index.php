<?PHP
 /*
 * API controller to handle all comunication from user users data
 */ 
require (__DIR__."/../../../services/productService.php");
require (__DIR__."/../../baseApi.php");


class Users extends api {

    public $jsonList;

    public function get(){
        $code = 200;
        $users = ProductService::getUsers(); // Call a public  static method getAll to obtein all users in DB//

        if($users == NULL || $users === ""){

            $code = 500;
            api::responseCode($code);
        }
        else{ 
            
            api::responseCode($code);

            header('Content-Type: application/json; charset=utf-8'); 
            header("Access-Control-Allow-Origin: *");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
            header("Access-Control-Allow-Headers: X-Requested-With");
            header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
            echo json_encode($users, JSON_PRETTY_PRINT);
        } 
    }
    public function post(){}
    public function put(){}
    public function delete(){}

}
$GameAPI = new Users();
$GameAPI->handleRequest();


