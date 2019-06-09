const styles = StyleSheet.create({

    container: {
        width:'100%',
        height:'100%'
        
    
      },
    
      map: {
    
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    
      },

      button: {

        width: width - 100,
        height: 40,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
        marginBottom: 15,
        marginHorizontal: 20,

      },

      buttonText: {

        color: '#000',
        fontWeight: 'bold',

      },

      inputContainer: {

        width: '100%',
        maxHeight: 200,
  
      },

      input: {

        width: width - 40,
        maxHeight: 200,
        backgroundColor: '#FFF',
        marginBottom: 15,
        marginHorizontal: 20,
  
      },

});


export default styles;