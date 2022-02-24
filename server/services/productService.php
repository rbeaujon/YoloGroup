<?PHP 

require (__DIR__."/db.php"); 

abstract class ProductService{
 
    public function __construct() { } 

    abstract function create($operator_id,$user_id,$user_name,$user_ip,$date);
    public static function delete(){}
    public static function getSession($login, $pass){

        $conn = new connectionDB();
        $conn->createConnection();
        $session = null; 

        $query= "SELECT * FROM users WHERE email='$login' and password='$pass' ";
        $result=$conn->executeQuery($query);
    
        $session = $result->fetch_assoc();
        if($session){
            // return ( [$session[0]->id, $session[0]->name] );
            return $session;
        }
        else{
            return $session;
        }
           

        // Closing the connection with BD
        $conn->closeConnection();

    }
    public static function getAllGames($operator_id){

        $conn = new connectionDB();
        $conn->createConnection();

        $queryOperator= "SELECT games FROM operator WHERE operator_id=$operator_id";
        $resultOperator=$conn->executeQuery($queryOperator);
        $operator = $resultOperator->fetch_assoc();
        if($operator === "" || $operator === null) {
            return $games = [];
        }
        else{
        $operatorGames =  explode( ',', $operator['games'] ) ;

        
        $games = []; 
        }
        foreach ($operatorGames as $value) {
            $query= "SELECT * FROM games WHERE game_code = '$value' ";
            $result=$conn->executeQuery($query);
            $dataGame = $result->fetch_assoc();
                array_push($games, $dataGame); // get all user games  available in DB
            
         }
        //Closing the connection with BD
        $conn->closeConnection();
        
        return $games; 

    }
    public static function getUrl($game_code){

        $conn = new connectionDB();
        $conn->createConnection();
        $url = []; 

        $queryOperator= "SELECT url FROM url_games WHERE game_code='$game_code'";
        $resultOperator=$conn->executeQuery($queryOperator);
        $link = $resultOperator->fetch_assoc();
        array_push($url, $link);
       
        //Closing the connection with BD
        $conn->closeConnection();
        
        return $url; 

    }
}

class products extends ProductService {


    public function create($operator_id,$user_id,$user_name,$user_ip,$date){
        // Method to create one dvd in the DB

            // my new instance of DB
            $conn = new connectionDB();
            
            // Create a new connection with DB
            $conn->createConnection();

            // registering in db according to the type of the item
        
            $sql_insert = "INSERT INTO logs  (`operator_id`, `user_id`, `user_name`, `user_ip`, `date`) VALUES ($operator_id, $user_id, '$user_name', '$user_ip', '$date')";
            $conn->executeQuery($sql_insert);

            // Closing the connection with BD
            $conn->closeConnection(); 
    }   
    public function update(){}  

}    
?>