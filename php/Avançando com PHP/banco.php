<?php

$contasCorrentes = 
[
    12345678910 => [
    'titular' => 'Vinicius',
    'saldo' => 1000
    ], 
    12345678911 => [
        'titular' => 'Maria',
        'saldo' => 10000
    ], 
    12345678912 => [
        'titular' => 'Alberto',
        'saldo' => 300
    ]
];

$contasCorrentes['12345678910']['saldo'] -= 500;

if(500 > $contasCorrentes['12345678912']['saldo']){
    echo 'Você não pode sacar este valor' . PHP_EOL;
}

foreach ($contasCorrentes as $cpf => $conta) {
    echo $cpf . " " . $conta['titular'] . ' ' . $conta['saldo'] . PHP_EOL;
}