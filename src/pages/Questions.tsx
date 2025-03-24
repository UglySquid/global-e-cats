import * as React from 'react';
import { Autocomplete, Card, FormControl, FormLabel, Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/joy';
import { questions } from '../components/questions.ts';

export default function Glossary() {
  const [selectedWord, setSelectedWord] = React.useState<string>('');
  const [showAnswers, setShowAnswers] = React.useState<{ [key: string]: boolean }>({});

  // Get unique topics
  const allTopics = Array.from(
    new Set(questions.flatMap((item) => item.topics))
  );

  const filteredWords = selectedWord
    ? questions.filter((item) =>
        item.topics.includes(selectedWord)
      )
    : questions;

  const handleToggleAnswer = (id: string) => {
    setShowAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
      <Typography level="h1">IB-Style Questions</Typography>
      <FormControl id="questions">
        <FormLabel>Filter by topic</FormLabel>
        <Autocomplete
          disableClearable
          options={allTopics}
          value={selectedWord}
          onChange={(_, newValue) => setSelectedWord(newValue)}
          isOptionEqualToValue={(option, value) => option === value}
        />
      </FormControl>

      {filteredWords.map((section, idx) => (
        <Card key={idx} sx={{ p: 2 }}>
          <Typography level="h4">{section.id}</Typography>
          <Typography level="body-sm">{section.question}</Typography>

          <Accordion sx={{ mt: 2 }}>
            <AccordionSummary>
              <Typography level="title-md">View Article & Answer</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {section.article && (
                <img
                  src={`../assets/${section.article}`}
                  alt="Article"
                  style={{ width: '100%', marginTop: '1rem', borderRadius: '8px' }}
                />
              )}

              <Button
                onClick={() => handleToggleAnswer(section.id)}
                variant='soft'
                sx={{ mt: 2 }}
              >
                {showAnswers[section.id] ? 'Hide Answer' : 'Show Answer'}
              </Button>

              {showAnswers[section.id] && section.answer && (
                <img
                  src={`/assets/${section.answer}`}
                  alt="Answer"
                  style={{ width: '100%', marginTop: '1rem', borderRadius: '8px' }}
                />
              )}
            </AccordionDetails>
          </Accordion>
        </Card>
      ))}
    </Stack>
  );
}
