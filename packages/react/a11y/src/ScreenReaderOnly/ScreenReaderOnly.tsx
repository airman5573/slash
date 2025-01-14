import { AllHTMLAttributes } from 'react';

type Props<Element extends keyof JSX.IntrinsicElements = 'span'> = {
  as?: Element;
} & Omit<AllHTMLAttributes<Element>, 'as'>;

/**
 * @name ScreenReaderOnly
 * @description
 * 시각적으로는 안 보이지만 스크린리더가 읽을 수 있는 컴포넌트 입니다.
 *
 * 접근성에 대응할 때, 스크린리더에만 읽히는 텍스트가 필요할 때 사용합니다.
 *
 * **필요한 예시**
 * - 바텀시트에서 어두운 영역 (디머) 를 선택했을 때, '닫기' 라고 하는 텍스트가 읽혔으면 하는 경우에, 디머 안에 `<ScreenReaderOnly>닫기</ScreenReaderOnly>` 를 넣을 수 있습니다.
 *
 * @example
 * <div role="text">화면에 표시도 되고 스크린리더가 읽을 수 있어요.</div>
 * <ScreenReaderOnly>
 *   <div role="text">화면에 표시되지 않지만 스크린리더가 읽을 수 있어요.</div>
 * </ScreenReaderOnly>
 */
function ScreenReaderOnly({ as: Component = 'span', children, ...props }: Props) {
  return (
    <Component
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        borderWidth: 0,
        clip: 'rect(0 0 0 0)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}

export default ScreenReaderOnly;
