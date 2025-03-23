import * as React from 'react';
import { Autocomplete, Card, FormControl, FormLabel, Stack, Typography } from '@mui/joy';
import { words } from '../components/words.ts';

export default function Glossary() {
  const [selectedWord, setSelectedWord] = React.useState<string>('');

  const filteredWords = selectedWord
    ? words.filter((item) => item.word.toLowerCase() === selectedWord.toLowerCase())
    : words;

  return (
    <Stack
      direction="column"
      spacing={{ xs: 1, sm: 2, md: 2 }}
      sx={{
        mx: 'auto',
        my: 0,
        py: 10,
        px: 10,
      }}
    >
      <Typography level="h1">Glossary</Typography>
      <FormControl id="glossary">
        <FormLabel>Search for a word</FormLabel>
        <Autocomplete
          placeholder="Type..."
          type="search"
          freeSolo
          // Clearable
          options={words.map((word) => word.word)}
          value={selectedWord}
          onInputChange={(_, newValue) => setSelectedWord(newValue)}
          selectOnFocus
          clearOnBlur
        />
      </FormControl>
      {filteredWords.map((section, idx) => (
        <Card key={idx}>
          <Typography level="h4">{section.word}</Typography>
          <Typography level="body-sm">{section.definition}</Typography>
        </Card>
      ))}
    </Stack>
  );
}
