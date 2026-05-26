# PowerShell script to clean UTF-8 encoding issues and remove diacritics
$repoPath = (Split-Path -Parent $MyInvocation.MyCommand.Path)
$files = Get-ChildItem -Path $repoPath -Recurse -Include *.md -File

# Mapping of broken UTF-8 sequences to proper characters
$replaceMap = @{
    'Ã¡' = 'a'; 'Ã©' = 'e'; 'Ã­' = 'i'; 'Ã³' = 'o'; 'Ãº' = 'u';
    'Ã' = 'A'; 'Ã‰' = 'E'; 'Ã' = 'I'; 'Ã“' = 'O'; 'Ãš' = 'U';
    'Ã±' = 'n'; 'Ã‘' = 'N'; 'Ã¼' = 'u'; 'Ãœ' = 'U';
    'Â¡' = '!'; 'Â¿' = '?';
    'â€”' = '--'; 'â€“' = '-';
    'â€œ' = '"'; 'â€' = '"'; 'â€˜' = "'"; 'â€™' = "'";
    'â€¦' = '...';
}

function Remove-Accents($text) {
    $normalized = [System.Text.NormalizationForm]::FormD
    $decomposed = [System.Text.Encoding]::Unicode.GetString([System.Text.Encoding]::Unicode.GetBytes($text))
    $sb = New-Object System.Text.StringBuilder
    foreach ($c in $decomposed.ToCharArray()) {
        $uc = [System.Globalization.CharUnicodeInfo]::GetUnicodeCategory($c)
        if ($uc -ne [System.Globalization.UnicodeCategory]::NonSpacingMark) {
            $null = $sb.Append($c)
        }
    }
    return $sb.ToString()
}

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    foreach ($key in $replaceMap.Keys) {
        $content = $content -replace [regex]::Escape($key), $replaceMap[$key]
    }
    # Remove diacritics (accents)
    $content = Remove-Accents $content
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
    Write-Host "Processed $($file.FullName)"
}

Write-Host "Cleanup completed."
