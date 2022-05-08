import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';

import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';

import { FeedbackType } from '../Widget/Widget';
import { Button } from '../Button/Button';
import { ScreenshotButton } from '../ScreenshotButton/ScreenshotButton';
import { api } from '../../libs/API';

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
};

export function Form({ feedbackType, onFeedbackCanceled,
  onFeedbackSent }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [comment, setComment] = useState('');

  const handleScreenshot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    }).then((uri) => setScreenshot(uri)).catch((error) => console.log(error));
  };

  const handleScreenshotRemove = () => {
    setScreenshot(null);
  };

  const handleSendFeedback = async () => {
    if (isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);
    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' });

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment,
      });
      onFeedbackSent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onFeedbackCanceled}
        >
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image
            source={feedbackTypeInfo.image}
            style={styles.imagem}
          />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        onChangeText={setComment}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo"
        placeholderTextColor={theme.colors.text_secondary}
      />
      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <Button onPress={handleSendFeedback} isLoading={isSendingFeedback} />
      </View>
    </View>

  );
}