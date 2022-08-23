import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { View,TextInput,Text,StyleSheet,TouchableOpacity,Switch } from "react-native";
import { Picker } from "react-native-web";

export default function inputs(){

    //--------------  INPUT NOME -----------------------
    const [nome,setNome] = useState('')
    
   
    //--------------  INPUT IDADE -----------------------
    const [idade,setIdade] = useState('')

    //--------------  INPUT SEXO -----------------------
    const [sexoSelecionado,setSexoSelecionado] = useState(0)
    const [sexo,setSexo] = useState([
        {key:1 ,nome:'Masculino'},
        {key:2 ,nome:'Feminino'},
        {key:3 ,nome:'Outros'}
    ])
    function pegaSexo(){
        setSexo(sexoSelecionado)
    }
    
    let sexoItem = sexo.map( (v,k) => {
        return <Picker.Item key={k} value={k} label={v.nome} />
    } )
    //--------------  INPUT LIMITE DO CARTÂO -----------------------
    const [limite,setLimite] = useState(0)

    //--------------  INPUT DO ESTUDANTE -----------------------
    const [status,setStatus] = useState(false)

    function form(){
       alert(
        nome + ' / ' + idade + ' / ' + sexoSelecionado + ' / ' + limite.toFixed(0) + ' / ' + status
       )
            
    }
    
   

    return(

            <View style={styles.container}>

                
                <TextInput
                style={styles.input}
                placeholder='Digite seu nome'
                onChangeText={setNome}
                value={nome}
                />
                <TextInput
                style={styles.input}
                placeholder='Digite sua Idade'
                onChangeText={setIdade}
                value={idade}
                />
            
                <Picker       
                style={styles.sexo}       
                selectedValue={sexoSelecionado}
                onValueChange={(itemValue,itemIndex)=> setSexoSelecionado(itemValue)}
                >
                   {sexoItem}
                </Picker>
            

            <View style={styles.slider}>
                <Text>Informe seu limite no cartão</Text>
                <Slider
                minimumValue={0}
                maximumValue={1000}
                value={limite}
                onValueChange={(limiteScelecionado)=>setLimite(limiteScelecionado)}
                />
                <Text>Limite do cartão : {limite.toFixed(0)} R$</Text>
            </View >

            <View style={styles.switch}>
                <Switch
                value={status}
                onValueChange={(valorSelecionado) => setStatus(valorSelecionado) }
                />
                <Text>Status: {status ? 'Estudante' : 'Não estudante'}</Text>
            </View>

            <View style ={styles.vbotao}>
                <TouchableOpacity
                style={styles.botao}
                onPress={form}
                >
                <Text style = {{fontSize: 15,color: '#FFFFFF'}}>Abrir Conta</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:25,
    },
    input:{
        
        height: 45,
        width: 350,
        borderWidth: 0.5,
        margin: 10,
        padding: 10,
        fontSize: 15,
        paddingBottom :10,
        borderRadius: 7
        
    },
    sexo:{
        height: 45,
        width: 350,
        margin: 10,
        padding: 10,
        fontSize: 15,
        paddingBottom :10,
        borderRadius: 7
    },
    slider:{
        
        textAlign: "center",
        paddingTop: 35
    },
    botao:{
    alignItems: "center",
    backgroundColor: "#447a38",
    padding: 10,
    borderRadius: 7
    },
    vbotao:{
        paddingTop:15
    },
    texto:{
        
        fontSizer: 20,
    },
    switch:{
        alignItems: "center",
        paddingBottom: 25,
        paddingTop: 25,
    }
});