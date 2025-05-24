<?php

return PhpCsFixer\Config::create()
    ->setRules([
        '@PSR12' => true,
        'twig' => true,
    ])
    ->setFinder(
        PhpCsFixer\Finder::create()
            ->in([
                __DIR__ . '/templates',  // adjust this to your twig files folder
                __DIR__ . '/src',        // adjust your PHP source folder
            ])
            ->name('*.php')
            ->name('*.twig')
    );
