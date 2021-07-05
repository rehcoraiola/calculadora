# calculadora

Para executar o programa, abra "index.html" que corresponde a parte HTML, que chama o arquivo "calculadora.js". Assim será possível usar a calculadora de alcance, o criador de anúncios e o filtro.

* A calculadora para alcance do anúncio, informa o total de visualizações originais e orgânicas de um mesmo anúncio baseado no valor do investimento 
No campo "Valor de investimento", adicione o valor em reais(R$), e clique no botão azul "estimativa de visualizações". Acima do botão surgira um campo com o valor estimado em vermelho.
Ao clicar no botão "estimativa de visualizações" o arquivo "calculadora.js" captura os valor digitado no campo input do HTML. Ao receber o valor é garantido com o "parseFloat" que é um float. Essa função de captura chama outra função chamada "estimativaMax" que recebe o valor digitado tratado e calcula as visualizações máximas.
Base de dados levando em consideração os anúncios anteriores por R$1.00  */
 vlorCentavos = 1.00; 
 viewOriginal = 30;
 click = 3.6;
 share = 0.54 * 4;
 viewRedeSocial = 86.40;
 Assim é calculado as visualizações originais e organizas "((valorRecebido * 100) * (30 + 86.40) / 100).toFixed(0)" tirando os números após a virgula para que a estimativa seja mais fiel. 
 


* A área em verde temos a opção de criar anúncios, aqui ao clicar em criar anuncio, o arquivo "calculadora.js" captura as informações dos campo e armazena em um array de objetos. Antes dessa criação é chamado uma função que "tratarDados", que antes de armazenar no array. Formata os dados:
Anuncio : sem alteração na String
Cliente: String em letra minúscula
Data inicio: como um número inteiro sem "-"
Data Fim: como um número inteiro sem "-"
Valor: reforçando o tipo Float
Após a criação do objeto um alerta é gerado na página informando "anuncio criado"


*Filtrar anúncios por intervalo de tempo e cliente
A parte HTML do filtro esta criada e a lógica no arquivo "calculadora.js" também porém não é gerado o relatório no HTML
A função "filtro()" captura os dados digitados e baseado neles chama funções para filtrar. Podendo filtrar pelo nome do cliente apenas, intervalo de dados e ambos. Fazendo assim a reutilização das funções. E se nenhum parâmetro for inserido é gerado um alerta na tela informando "Nenhum parâmetro inserido para filtrar"
As datas são tratadas.
E após a filtragem dos elementos que correspondem a pesquisa, é chamado uma nova função que cria os dados para o relatório. Função "relatório que receber um objeto como parâmetro (objeto que correspondem apenas as filtragens já tratado). Usando o "new Date" é a biblioteca Math é calculado os dias entre as datas e com base nesses dias é retornado.
Valor Total do investimento
Quantidade máxima de visualizações
Quantidade máxima de compartilhamento
Quantidade máxima de cliques.
Com base no calculo por um real(R$1.00)




