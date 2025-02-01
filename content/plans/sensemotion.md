---
title: Sensemotion
date: 2024-12-31
description: Roadmap for Sensemotion (MC sound modulation project at TMG)
toc: true
---

# Sensemotion

Listening to muscles by using a TMG MC sensor's signal to modulate a sound wave.

## Week 1: Ring buffer in C

Scalar ring buffer in C: implement fixed-length ring buffer of double values supporting `add_new`, `remove_oldest`, and `count` operations:

```c
typedef struct ring_buf ring_buf;
void add_new(ring_buf* rb, double val);
double remove_oldest(ring_buf* rb);
size_t count(ring_buf* rb);
```

Array ring buffer in C: implement fixed-length ring buffer of buffers of double values supporting `add_new`, `remove_oldest`, and `count` operations:

```c
typedef struct ring_buf ring_buf;
void add_new(ring_buf* rb, double val);
double remove_oldest(ring_buf* rb);
size_t count(ring_buf* rb);
```

## Week 2a: Audio programming with ALSA

Learn to output audio programatically using ALSA:

- Understand role of sample format (integer/floating point, signed/unsigned, bit depth, endianness), channel count, sample rate, buffer time, period time.
- Learn to list available audio output devices, list their parameters, and select them for audio output.
- MWE outputting an e.g. 440 Hz, 2-channel, 16-bit LE signed integer sine wave to a chosen audio output device.

## Week 2b: Multithreaded processing; translation of modulation program to C

- Multithreaded producer/consumer use of ring buffer with system millisecond data stream: a producer thread continuously fills ring buffer, and a consumer thread continuously empties ring buffer, printing values to e.g. stdout or some other output stream.
- Translate full multithreaded data acquisition and sound modulation program from Python to C.
- Test modulation program in C with system clock's millisecond data stream as modulating signal.

## Week 3: Inertial Measurement Unit (IMU) data acquisition and processing

- Document wiring connections needed to stream IMU values from Raspberry Pi
- IMU data streaming: connect IMU to Raspberry Pi over I2C, stream ACC and GYRO values from IMU; print to stdout.
- Implement sound modulation program in C using e.g. magnitude of IMU ACC as modulating signal
- Repeat in stereo, e.g. using two ACC channels for stereo audio output.

## Week 4: MC sensor data acquisition and processing MWE

- Document hardware and connections for reading values from potentiometer
- Read analog signal from e.g. a potentiometer using voltmeter
- Connect potentiometer to ADC; stream values from potentiometer and print to standard output
- Use potentiometer signal as modulating signal

- Document hardware and connections for reading values from MC sensor
- Read analog signal from MC sensor using voltmeter
- Connect MC sensor to ADC; stream values from MC sensor and print to standard output
- Use MC signal as modulating signal

## Week 5: MC sensor with offset correction and amplification

- Document hardware and connections for connecting MC sensor to offset/amplifier chip
- Read analog output of offset/amplifier chip with voltmeter; compare to raw MC output.
- Connect offset/amplifier chip to ADC; stream values and print to standard output
- Use output of offset/amplifier chip as modulating signal
