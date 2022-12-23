import { IImageProps, Image } from 'native-base'

type Props = IImageProps & {
  size?: number
}

export function ExerciseImage({
  size = 16,
  alt,
  rounded = 'md',
  ...rest
}: Props) {
  return (
    <Image
      w={size}
      h={size}
      rounded={rounded}
      alt={alt}
      resizeMode="cover"
      {...rest}
    />
  )
}
