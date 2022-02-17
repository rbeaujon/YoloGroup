<?PHP 

require (__DIR__."/db.php"); 

abstract class ProductService{
 
    public function __construct() { } 

    abstract function create();
    public static function delete($items){
        
            // new inst from db
            $conn = new connectionDB();
            
            // my new conexion to db
            $conn->createConnection();
        
           //delete items in massive mode from products the list from functions massdelete
            
            $sql_del= "DELETE FROM games WHERE id in ($items)";
            
            $conn->executeQuery($sql_del);
        
            // Closing the connection with BD
            $conn->closeConnection();
        
    }
    public static function getAllGames($operator_id){

        $conn = new connectionDB();
        $conn->createConnection();

        $queryOperator= "SELECT games FROM operator WHERE operator_id=$operator_id";
        $resultOperator=$conn->executeQuery($queryOperator);
        $operator = $resultOperator->fetch_assoc();
        $operatorGames =  explode( ',', $operator['games'] ) ;

        
        $games = []; 
       
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
}

class products extends ProductService {


    public function create(){
    

            // my new instance of DB
            $conn = new connectionDB();
            
            // Create a new connection with DB
            $conn->createConnection();

            // registering in db according to the type of the item
        
            $sql_insert = "INSERT INTO games (id, info, category) VALUES ($id, '$info', $category)";
            $conn->executeQuery($sql_insert);

            // Closing the connection with BD
            $conn->closeConnection();       
    }   
    public function update(){
        // Method to create one dvd in the DB
   
               // my new instance of DB
               $conn = new connectionDB();
               
               // Create a new connection with DB
               $conn->createConnection();
   
               // registering in db according to the type of the item
           
               $sql_insert = "UPDATE games SET info='$info', category=$category WHERE id=$id";
               $conn->executeQuery($sql_insert);
   
               // Closing the connection with BD
               $conn->closeConnection();       
       }  

}    
?>