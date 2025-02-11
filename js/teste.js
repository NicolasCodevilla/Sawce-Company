$(function () {
    // Seleção dos elementos de pergunta
    var $questionElement1 = $('#pergunta\\[96454\\]');
    var $thingsToHide = $('#submit');
    var $lgpdField = $('.lgpd-e-cs');
  
    // Função para verificar o comportamento com base nas respostas selecionadas
    function checkAnswerBehavior($answer1, $thingsToHide, $lgpdField) {
      var block =
        ["[selecione]","Não"].includes($answer1);
  
      if (block) {
        // Esconde os elementos de submit e o campo LGPD
        $thingsToHide.add($lgpdField).css({
          display: "none",
          visibility: "hidden"
        });
      } else {
        // Exibe os elementos de submit e o campo LGPD
        $thingsToHide.add($lgpdField).css({
          display: "block",
          visibility: "visible"
        });
      }
    }
  
    // Inicializa os valores selecionados
    var $selectedAnswer1 = $questionElement1.find('option:selected').val();
    
    // Verifica a exibição dos elementos com base nas respostas iniciais
    checkAnswerBehavior($selectedAnswer1, $thingsToHide, $lgpdField);
  
    // Adiciona eventos de mudança para atualizar os valores selecionados
    function addChangeListener($element, updateBehavior) {
      $element.on('change', function () {
        var $answer1 = $questionElement1.find('option:selected').val();
        updateBehavior($answer1, $thingsToHide, $lgpdField);
      });
    }
  
    // Adiciona os listeners de mudança para cada pergunta
    addChangeListener($questionElement1, checkAnswerBehavior);
  });